"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleCard = ExampleCard;
var Button_1 = require("./Button");
function ExampleCard(_a) {
    var name = _a.name, onClick = _a.onClick;
    return (<Button_1.Button variant="outline" onClick={onClick} className="transition-transform hover:scale-105">
      {name}
    </Button_1.Button>);
}
