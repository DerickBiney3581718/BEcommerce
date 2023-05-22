import requests

# endpoint = 'http://localhost:8000/auth/'
# auth_response = requests.post(
#     endpoint, json={"username": "derick", "password": "sudo"})
# print(auth_response.json())
# print(auth_response.status_code)

# if auth_response.status_code == 200:
#     token = auth_response.json()['token']
#     headers = {
#         "Authorization": f"Token {token}"
#     }
endpoint = 'http://localhost:8000/collections/1/recipes'
get_response = requests.get(endpoint)
print(get_response.json())
