import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AdmService } from './adm/adm.service';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const admSvc = app.get(AdmService);

  try {
    const adminExists = await admSvc.findByName('admin');
    if (adminExists) {
      console.log('Admin já existe. Nada feito.');
    } else {
      await admSvc.create({ name: 'admin', password: 'senha123' });
      console.log('Admin seed criado: name=admin password=senha123');
    }
  } catch (err) {
    console.error('Erro no seed:', err);
  } finally {
    await app.close();
  }
}
bootstrap();
