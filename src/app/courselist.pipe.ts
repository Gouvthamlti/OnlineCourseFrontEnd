import { Pipe, PipeTransform } from '@angular/core';
import { HomeService,ICourse } from "./services/home.service";
@Pipe({
  name: 'courselist'
})
export class CourselistPipe implements PipeTransform {

  
  transform(course1: ICourse[], searchValue: string):ICourse[] {
    if (!course1 || !searchValue) {
        return course1;
    }
    return course1.filter(course1 =>
      course1.Course_Name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1);
}
}
