export class Course {
Course_Name:string
Course_Description:string
Course_Author:string
Course_Duration:string
Course_Difficulty:string
credit_score:string
credits:number
constructor(Course_Name:string="",
    Course_Description:string="",
   
    Course_Author:string="",
    Course_Duration:string="",
    Course_Difficulty:string="",
    credit_score:string="",credits:number=0){
        this.Course_Name=Course_Name
        this.Course_Description=Course_Description
        this.Course_Author=Course_Author
        this.Course_Duration=Course_Duration
        this.Course_Difficulty=Course_Difficulty
        this.credit_score=credit_score
        this.credits=credits
}
}
