import chaiHttp from "chai-http";
import { use, expect } from "chai";
import { app } from "../server.js";

const client = use(chaiHttp);
