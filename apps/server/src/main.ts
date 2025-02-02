import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 配置
  const config = new DocumentBuilder()
    .setTitle('投资组合 API')
    .setDescription('投资组合管理系统 API 文档')
    .setVersion('1.0')
    .addTag('长桥证券')
    .addBearerAuth() // 如果使用 JWT 认证
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // 访问路径为 /docs

  await app.listen(3000);
}

bootstrap().catch(console.error);
