from django.test import TestCase
from .forms import RenewBookForm
import datetime
from .models import User

# Create your tests here.


class UserModelTests(TestCase):

    def setUp(self):
        self.form = RenewBookForm()

    def test_renew_form_date_field_label(self):
        self.assertTrue(
            self.form.fields['renewal_date'].label is None or self.form.fields['renewal_date'].label == 'renewal date')

    def test_renew_form_date_field_help_text(self):
        self.assertEqual(self.form.fields['renewal_date'].help_text,
                         "Enter a date between now and 4 weeks (default 3).")

    def test_renew_form_before_date(self):
        date = datetime.date.today() - datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_after_date(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4, days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_today(self):
        date = datetime.date.today()
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())

    def test_renew_form_deadline(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4)
        form = RenewBookForm(data={'renewal_date': date})
        print(date)
        self.assertTrue(form.is_valid())


class AuthorListViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        num_of_authors = 15
        for author in range(num_of_authors):
            User.objects.create(
                name=f' Kwamarta {author}',
                email=f'Surname{author}@gmail.com'
            )

    def test_view_if_accessible_through_url(self):
        res = self.client.get('authors/')
        self.assertTemplateUsed(res, 'index.html')
        self.assertEqual(res.status_code, 200)
