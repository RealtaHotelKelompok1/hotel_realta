"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const main_module_1 = require("./main.module");
const port = process.env.PORT || 3003;
async function bootstrap() {
    const app = await core_1.NestFactory.create(main_module_1.MainModule);
    app.enableCors();
    await app.listen(process.env.PORT, () => {
        console.log("Listen on port " + port);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map