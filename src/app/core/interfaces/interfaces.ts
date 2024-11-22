export interface User {
    userId:  number;
    name:    string;
    email:   string;
    company: Company;
}

export interface Company {
    companyId: number;
    name:      string;
    nit:       string;
    phone:     string;
    address:   string;
    email:     string;
}

export interface Projects {
    projectId:    number;
    name:         string;
    creationDate: Date;
    endDate:      Date;
    userStories:  any[];
}

export interface UserStory {
    storyId:      number;
    name:         string;
    description:  string;
    creationDate: Date;
    endDate:      Date;
    tickets:      Ticket[];
    user:         string;
}

export interface Ticket {
    ticketId:    number;
    name:        string;
    description: string;
    status:      string;
    user:        string;
}

export interface TicketDetails {
    ticketId:    number;
    name:        string;
    description: string;
    storyId:     number;
    comments:    Comment[];
    status:      string;
    user:        string;
}

export interface Comment {
    commentId:    number;
    commentText:  string;
    creationDate: Date;
    user:         string;
}

export interface JwtResponse {
    message: string;
    jwt:     string;
}

