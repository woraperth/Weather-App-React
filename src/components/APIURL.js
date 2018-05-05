// Collection of all API base URL

export const API_Unsplash = 'https://api.unsplash.com/search/photos/?page=1&client_id=9b3b29e5d81c6d741732141ec1b51aa08963db6cd0ff62ec2c8f5d41d979e030&per_page=5&query='

export const API_Weather_Current = (location) => {
    return 'http://api.weatherunlocked.com/api/current/' + location + '/?app_id=930fc96a&app_key=bd8f96bc469b5f3a186a7b87da0f8ddd'
}

export const API_Weather_Forecast = (location) => {
    return 'http://api.weatherunlocked.com/api/forecast/' + location + '/?app_id=930fc96a&app_key=bd8f96bc469b5f3a186a7b87da0f8ddd'
}