[16:31, 18/12/2020] Anil Nagavaram: const express = require("express");

const app = express();
const bodyParser = require('body-parser')
const NodeCache = require("node-cache");
const memory = new NodeCache();
const jsonParser = bodyParser.json()

const { v4: uuidv4 } = require("uuid");

const initialData = [
  {
    id: uuidv4(),
    name: "Santhosh",
    skills: ["HTML", "CSS", "Javascript"]
  }
];
memory.set("persons", initialData, 10000);

app.get("/", (req, res) => {
  const val = memory.get("persons");
  res.status(200);
  res.json(val);
});

app.post("/candidates", jsonParser, (req, res) => {
    try {
        const data = memory.get("persons");
        const newVal = {
            id: uuidv4(),
            name: req.body.name,
            skills: req.body.skills || []
        }
        data.push(newVal);
        memory.set("persons", data, 10000);
        res.json(data);
    } catch(err) {
        res.status(400)
        .json(err)
    }
});
app.get("/candidates/search", jsonParser, (req, res) => {
    try {
        console.log(req.query.skills)
        const data = memory.get("persons");
        data.forEach(item => {
            console.log(item.skills)
        });
        res.json(data);
    } catch(err) {
        res.status(400)
        .json(err)
    }
});
app.use(bodyParser)
app.listen(8080);
[16:38, 18/12/2020] Anil Nagavaram: const express = require("express");

const app = express();
const bodyParser = require('body-parser')
const NodeCache = require("node-cache");
const memory = new NodeCache();
const jsonParser = bodyParser.json()

const { v4: uuidv4 } = require("uuid");

const initialData = [
  {
    id: uuidv4(),
    name: "Santhosh",
    skills: ["HTML", "CSS", "Javascript"]
  }
];
memory.set("persons", initialData, 10000);

app.get("/", (req, res) => {
  const val = memory.get("persons");
  res.status(200);
  res.json(val);
});

app.post("/candidates", jsonParser, (req, res) => {
    try {
        const data = memory.get("persons");
        const newVal = {
            id: uuidv4(),
            name: req.body.name,
            skills: req.body.skills || []
        }
        data.push(newVal);
        memory.set("persons", data, 10000);
        res.json(data);
    } catch(err) {
        res.status(400)
        .json(err)
    }
});
app.get("/candidates/search", jsonParser, (req, res) => {
    try {
        console.log(req.query.skills)
        if(req.query.skills) {
            const data = memory.get("persons");
            const reqSkills = req.query.skills.split(',')
            const arr = []
            data.forEach(item => {
                console.log(item.skills)
                if(item.skills.some(i => reqSkills.includes(i))) {
                    arr.push(item)
                }
            });
            res.json(arr);
        }else {
            res.json([])
        }
    } catch(err) {
        res.status(400)
        .json(err)
    }
});
app.use(bodyParser)
app.listen(8080);