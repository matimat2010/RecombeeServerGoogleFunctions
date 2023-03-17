# Recombee Server

This is a server that implements an API for a Recombee recommendation engine. It exposes several endpoints for different recommendation use cases.

## Prerequisites

Before using this cloud function, make sure you have:

-   Node.js installed on your local machine
-   A Recombee account with a database and access to the API key and private token
-   An environment file (.env) with your Recombee credentials and region

## Setup

1. Clone the repository to your local machine.
2. Run npm install to install the required dependencies.
3. Create a .env file in the project root directory and add the following environment variables:

```
DATABASE_ID = your_database_id
PRIVATE_TOKEN = your_private_token
REGION = your_region
```

Replace your_database_id, your_private_token, and your_region with the appropriate values from your Recombee account.

## Running the Cloud Function Locally

To run the cloud function locally, execute the following command in your terminal:

```
functions-framework --target=recombeeFunction
```

This will start the Functions Framework on localhost:8080.

## Endpoints

The following endpoints are available:

### RecommendItemsToUser

Recommend items to a user based on their previous interactions.

```
GET /RecommendItemsToUser?userId=<userId>&domain=<domain>&count=<count>
```

Parameters:

userId (required): the ID of the user to recommend items to.
domain (required): the domain of the items to recommend.
count (optional, default: 1): the number of items to recommend.
Example: http://localhost:8080/RecommendItemsToUser?userId=userTwo&domain=qctimes.com&count=1

### RecommendItemsToItem

Recommend items similar to a given item.

```
GET /RecommendItemsToItem?itemId=<itemId>&targetUserId=<targetUserId>&count=<count>&domain=<domain>
```

Parameters:

-   itemId (required): the ID of the item to recommend similar items to.
-   targetUserId (optional): the ID of the user to personalize the recommendations for.
-   count (optional, default: 1): the number of items to recommend.
-   domain (required): the domain of the items to recommend.
-   Example: http://localhost:8080/RecommendItemsToItem?itemId=itemTwo&targetUserId=userOne&count=1&domain=qctimes.com

### Detail View

Register a detail view of an item by a user.

```
GET /DetailView?userId=<userId>&itemId=<itemId>
```

Parameters:

-   userId (required): the ID of the user who viewed the item.
-   itemId (required): the ID of the item that was viewed.
-   Example: http://localhost:8080/DetailView?userId=userOne&itemId=itemTwo

### Add Purchase

Register a purchase of an item by a user.

```
GET /AddPurchase?userId=<userId>&itemId=<itemId>
```

-   userId (required): the ID of the user who purchased the item.
-   itemId (required): the ID of the item that was purchased.
-   Example: http://localhost:8080/AddPurchase?userId=userOne&itemId=itemOne

### Add Item

Register a new item in the recommendation engine.

```
GET /AddItem?itemId=<itemId>
```

Parameters:

-   itemId (required): the ID of the item to add.
-   Example: http://localhost:8080/AddItem?itemId=itemOne

### SetPropertyValues

Set the property values of an item.

```
GET /SetPropertyValues?itemId=<itemId>&canonicalUrl=<canonicalUrl>&contentType=<contentType>&hostname=<hostname>&previewImages=<previewImages>&title=<title>&url=<url>
```

Parameters:

-   itemId (required): the ID of the item to set property values for.
-   canonicalUrl (optional): the canonical URL of the item.
-   contentType (optional): the content type of the item.
-   hostname (optional): the hostname of the item's website.
-   previewImages (optional): the preview images of the item.
-   title (optional): the title of the item.
-   url (optional): the URL of the item.
