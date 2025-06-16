const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports", "text": "Major league sports games" },
        { "value": "food_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_with_friends_family", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_trendy_places", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_destinations", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations_luxury", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "interested_not_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Jays Tickets Giveaway",
    "heroHeadline": "Win Big with <span class='highlight'>Jays Tickets!</span>",
    "heroSubheadline": "Celebrate Canada Day in Style! Join us for your chance to win tickets to an amazing Jays game!",
    "promotionDates": "Promotion runs from June 18, 2025 until July 1, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
    "heroCtaText": "Enter Now",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're entered for the Jays Tickets Giveaway! 🎉",
    "successModalMainMessage": "Your entry has been successfully submitted. We'll announce the winner on July 2, 2025. Good luck!",
    "successModalEmailPrompt": "Make sure to check your email for the winner announcement!"
  },
  "prize": {
    "name": "$100 Value Jays Tickets",
    "value": "$100 Value",
    "description": "Experience the thrill of a live Blue Jays game with tickets worth $100. A perfect summer outing to enjoy baseball excitement and make unforgettable memories!",
    "images": [
      {
        "src": "https://cdn.pixabay.com/photo/2017/08/07/15/10/hands-2607197_1280.jpg",
        "alt": "Baseball game tickets"
      },
      {
        "src": "https://cdn.pixabay.com/photo/2016/03/27/21/28/baseball-1289259_1280.jpg",
        "alt": "Blue Jays game action"
      },
      {
        "src": "https://cdn.pixabay.com/photo/2017/03/02/20/57/baseball-2115439_1280.jpg",
        "alt": "Baseball stadium crowd"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "$100 worth of tickets to a Jays game" },
      { "icon": "fas fa-baseball-ball", "text": "Experience the excitement of live baseball" },
      { "icon": "fas fa-users", "text": "Perfect for friends or family outings" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter" },
      { "icon": "fas fa-bolt", "text": "Quick and easy entry at our booth" }
    ],
    "limitedTimeOfferText": "⚾ Celebrate Canada Day with Jays Tickets!",
    "ctaButtonText": "Enter to Win!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Catch us at the Canada Day event on July 1st"
      },
      {
        "icon": "fas fa-clipboard-check",
        "title": "Fill the Form",
        "description": "Complete a quick and fun survey at our booth"
      },
      {
        "icon": "fas fa-trophy",
        "title": "Wait for the Draw",
        "description": "Winner will be announced on July 2nd, 2025"
      }
    ],
    "highlights": [
      { "icon": "fas fa-baseball-ball", "text": "Enjoy the thrill of baseball" },
      { "icon": "fas fa-sun", "text": "Perfect summer giveaway" },
      { "icon": "fas fa-smile", "text": "Free to enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter your details below for your chance to win Jays tickets worth $100!",
    "entryCountText": "Join hundreds already excited to win!",
    "socialSharePrompt": "Share the Jays fun with your friends:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Jays tickets for Canada Day!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Square Selection",
      "text": "Winner selection is completely random and unbiased, using a certified random number generator."
    },
    "importantNotice": {
      "title": "Winner Notification - Check Your Email!",
      "text": "The winner will be contacted by email after the July 2, 2025 draw. Be sure to check your inbox and spam folder."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Open to residents who enjoy baseball and are 18 years or older."
      },
      {
        "q": "When does the giveaway run?",
        "a": "June 18, 2025 through July 1, 2025. Entries close on July 1st at the Canada Day event."
      },
      {
        "q": "How will the winner be chosen?",
        "a": "One winner will be randomly chosen from all eligible entries."
      },
      {
        "q": "When will the winner be notified?",
        "a": "Winner will be announced on or about July 2, 2025 via email."
      },
      {
        "q": "How many entries can I submit?",
        "a": "One entry per person/email address. Duplicate entries will be disqualified."
      },
      {
        "q": "Is my information secure?",
        "a": "Your privacy is respected and data is used only for giveaway administration."
      }
    ],
    "tips": [
      "Double-check your email for accuracy.",
      "Add the sender email to your contacts to ensure notification delivery.",
      "Follow Sky Group on social media for updates and winner announcements."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/777776b6-d7a4-424e-8ea4-333ed3be7501/The_Sky_Group_X_Property.ca_cobranded_logo.pdf",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Win Jays Tickets Giveaway - Canada Day 2025!",
    "navBrandLogoText": "Sky Group"
  },
  "settings": {
    "ghlWebhookUrl": "https://n8n.salesgenius.co/webhook/giveaway",
    "theme": "light",
    "confettiColors": ["#003366", "#0066CC", "#FF0000", "#FFFFFF"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-865",
    "repoUrl": "https://github.com/arslvn93/Giveaway-865",
    "tag": "Jays Tickets Canada Day 2025",
    "netlifyUrl": "http://Giveaway-865.netlify.app",
    "netlifyId": "1003266102"
  }
};