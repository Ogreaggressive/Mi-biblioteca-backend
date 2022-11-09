import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BookInterface } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto): BookInterface{
    const book: BookInterface = {
      id: 1,
      titulo: 'La triste vida de un programador',
      autor: 'Juan Valdivia',
      paginas: 250
    }
    return book;
  }
}
