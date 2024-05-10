const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

chai.use(sinonChai);

const rewire = require("rewire");
const mongoose = require("mongoose");

const sandbox = sinon.createSandbox();

const helloController = rewire("../controller/hello.js");
