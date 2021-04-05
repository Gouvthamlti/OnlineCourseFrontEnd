export class enroll{
    UserName:string;
    Course_Id:number;
    Course_Enrolleddate:number;
    Course_StartDtae:number;
    Status:string;
    constructor(UserName:string="", Course_Id:number=0,
        Course_Enrolleddate:number=0,
        Course_StartDtae:number=0,
        Status:string=""){
            this.UserName=UserName;
            this.Course_Id=Course_Id;
            this.Course_Enrolleddate=Course_Enrolleddate;
            this.Course_StartDtae=Course_StartDtae;
            this.Status=Status;
        }
}
