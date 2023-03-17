const express = require("express");
const config = require("./config");
var client = config.client;
var rqs = config.rqs;

// Create Express instance
const app = express();

// Build links for quick use
app.get("/", (req, res) => {
    res.send(
        `<ul>
            <li><a href="/RecommendItemsToUser?userId=''&domain='' count=''">RecommendItemsToUser</a></li>
            <li><a href="/RecommendItemsToItem?itemId=''&targetUserId=''&count=''&domain=''">RecommendItemsToItem</a></li>
            <li><a href="/DetailView?userId=''&itemId=''">DetailView</a></li>
            <li><a href="/AddPurchase?userId=''&itemId=''">AddPurchase</a></li>
            <li><a href="/AddItem?itemId=''">AddItem</a></li>
            <li><a href="/SetPropertyValues?itemId=''&canonicalUrl=''&contentType=''&hostname=''&previewImages=''&title=''&url=''">SetPropertyValues</a></li>
        </ul>`
    );
});

// Import route handlers
const recommendItemsToUser = require("./routes/RecommendItemsToUser");
const recommendItemsToItem = require("./routes/RecommendItemsToItem");
const detailView = require("./routes/DetailView");
const addPurchase = require("./routes/AddPurchase");
const addItem = require("./routes/AddItem");
const setPropertyValues = require("./routes/SetPropertyValues");

// Define routes and handlers
app.get("/RecommendItemsToUser", recommendItemsToUser);
app.get("/RecommendItemsToItem", recommendItemsToItem);
app.get("/DetailView", detailView);
app.get("/AddPurchase", addPurchase);
app.get("/AddItem", addItem);
app.get("/SetPropertyValues", setPropertyValues);

// Exports app instance created by Express as a module so Google Function Framworks can use it.
exports.startServer = app;
