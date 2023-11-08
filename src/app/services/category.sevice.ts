import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Category } from "../interfaces/category";
import { HttpClient } from "@angular/common/http";

@Injectable ({
  providedIn: 'root'
})

export class CategoryService {
private category$ = new BehaviorSubject<Category[]>([])

constructor(private httpClient: HttpClient) {

}

getCategory(): Observable<Category[]>{
  return this.category$.asObservable()
}

loadCategory() :void {
  this.httpClient.get<Category[]>('http://localhost:3000/Categories')
  .subscribe({
    next: (v) =>
    this.category$.next(v)
  })
}

}
