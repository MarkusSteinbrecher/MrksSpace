import os
import json
import requests

GITHUB_API_URL = "https://api.github.com"
DATA_FOLDER = "data"

def fetch_user_info(username):
    response = requests.get(f"{GITHUB_API_URL}/users/{username}")
    return response.json()

def fetch_repo_info(repo_path):
    response = requests.get(f"{GITHUB_API_URL}/repos/{repo_path}")
    return response.json()

def save_data_to_file(data, file_path):
    with open(file_path, "w") as f:
        json.dump(data, f, indent=4)

def main():
    # Load input data from JSON file
    with open("static/gh_input.json", "r") as f:
        input_data = json.load(f)

    # Create data folder if it doesn't exist
    if not os.path.exists(DATA_FOLDER):
        os.makedirs(DATA_FOLDER)

    # Fetch and save user info
    for username in input_data["usernames"]:
        user_info = fetch_user_info(username)
        user_file_path = os.path.join(DATA_FOLDER, f"{username}_info.json")
        save_data_to_file(user_info, user_file_path)
        print(f"Saved user info for {username} to {user_file_path}")

    # Fetch and save repository info
    for repo_path in input_data["repositories"]:
        repo_info = fetch_repo_info(repo_path)
        repo_name = repo_path.split("/")[-1]
        repo_file_path = os.path.join(DATA_FOLDER, f"{repo_name}_info.json")
        save_data_to_file(repo_info, repo_file_path)
        print(f"Saved repo info for {repo_path} to {repo_file_path}")

if __name__ == "__main__":
    main()
