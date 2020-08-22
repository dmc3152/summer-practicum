import { Module } from '@nestjs/common';
import { DatabaseModule } from "src/database/database.module";
import { clientProviders } from "src/database/client.providers"

@Module({
    imports: [DatabaseModule],
    providers: [...clientProviders],
    exports: [...clientProviders],
})
export class ClientModule {}