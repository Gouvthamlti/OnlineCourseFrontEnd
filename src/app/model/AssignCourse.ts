export class AssignCourse {
    
    UserName: string;
    Course_Id: number;
    Course_AssignedDate: number;
    Course_StartDate: number;
    Course_CompletionDate:number;
    AdminName: string;
    credit_score: string;
    Status: string;
    credits:number;
    constructor(UserName: string = "", Course_Id: number = 0,
        Course_AssignedDate: number = 0,
        Course_StartDate: number = 0, Course_CompletionDate:number=0, AdminName: string = "",
        credit_score: string = "",
        Status: string = "",credits:number=0) {
        this.UserName = UserName;
        this.Course_Id = Course_Id;
        this.Course_AssignedDate = Course_AssignedDate;
        this.Course_StartDate = Course_StartDate;
        this.Course_CompletionDate=Course_CompletionDate
        this.AdminName = AdminName;
        this.credit_score = credit_score;
        this.Status = Status;
        this.credits=credits;
    }
}