# Backend Coding Challenge - Auto-complete Suggestions for Users

This is a coding challenge to design a REST API endpoint that provides auto-complete suggestions for Users based on a search term.

## Sample Responses

### Near Match
- Request: `GET /suggestions?q=Ale`
```json
{
  "suggestions": [
    {
      "name": "Aleisha Tony, Iwuru, Biase, CRS"
    },
    {
      "name": "Alex Rapu, Island, Akamkpa, CRS"
    },
    {
      "name": "Alexander Kaku, Odiong, Obot-Akara, AKW"
    }
  ]
}
