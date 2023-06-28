class SubsetConverter:
    regex = "^(\d+_).*"

    def to_python(self, value):
        return list(str(value).split('_'))

    def to_url(self, value):
        return '_'.join(value)
