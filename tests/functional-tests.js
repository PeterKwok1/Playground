import chaiHttp from "chai-http";
import { use } from "chai";
import { expect } from "chai";
import { app } from "../server.js";

const client = use(chaiHttp)