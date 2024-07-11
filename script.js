
class Residence {
    constructor(name, address, occupied = false) {
        if (this.constructor === Residence) {
            throw new Error("Abstract class 'Residence' cannot be instantiated directly.");
        }
        this.name = name;
        this.address = address;
        this.occupied = occupied;
    }

    getDetails() {
        return `${this.name}, located at ${this.address}, is currently ${this.occupied ? "occupied" : "not occupied"}.`;
    }
}


class DormRoom extends Residence {
    constructor(name, address, size, occupied = false) {
        super(name, address, occupied);
        this.size = size;
    }

    getRent() {
        return this.size * 10;
    }

    getDetails() {
        return `${super.getDetails()} It is a dorm room with a size of ${this.size} sq ft.`;
    }
}

class Apartment extends Residence {
    constructor(name, address, bedrooms, occupied = false) {
        super(name, address, occupied);
        this.bedrooms = bedrooms;
    }

    getRent() {
        return this.bedrooms * 500;
    }

    getDetails() {
        return `${super.getDetails()} It is an apartment with ${this.bedrooms} bedrooms.`;
    }
}


class Student {
    constructor(name, studentID, gender) {
        this.name = name;
        this.studentID = studentID;
        this.gender = gender;
        this.residence = null;
    }

    assignResidence(residence) {
        if (residence instanceof Residence) {
            this.residence = residence;
            residence.occupied = true;
        } else {
            throw new Error("Invalid residence");
        }
    }

    getDetails() {
        return `${this.name}, ID: ${this.studentID}, Gender: ${this.gender}, Residence: ${this.residence ? this.residence.name : "None"}.`;
    }
}


class MaintenanceRequest {
    constructor(description, student) {
        this.description = description;
        this.status = "submitted";
        this.student = student;
        this.assignedEmployee = null;
    }

    assignEmployee(employee) {
        this.assignedEmployee = employee;
        this.status = "in progress";
    }

    completeRequest() {
        this.status = "completed";
    }

    getDetails() {
        return `Request: ${this.description}, Status: ${this.status}, Submitted by: ${this.student.name}, Assigned Employee: ${this.assignedEmployee ? this.assignedEmployee : "None"}.`;
    }
}