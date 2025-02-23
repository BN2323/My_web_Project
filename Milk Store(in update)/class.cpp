#include <iostream>

#include <string>

using namespace std;



class Student {

private:

    int studentID;

    float score;

    string GPA;





public:

    string name;

    int age;


    Student(string name, int studentID) : name(name), studentID(studentID), age(0), score(0.0), GPA("F") {}



    void updateInfo(string name, int age, int studentID, float score) {

        this->name = name;

        this->age = age;

        this->studentID = studentID;

        this->score = score;

        this->GPA = calculateGPA(score);

    }



    void displayInfo() {

        cout << "Name: " << name << endl;

        cout << "Age: " << age << endl;

        cout << "Student ID: " << studentID << endl;

        cout << "Score: " << score << endl;

        cout << "GPA: " << GPA << endl;

    }



    string getGPA(float score) {

        if (score >= 90) return "A";

        else if (score >= 80) return "B";

        else if (score >= 70) return "C";

        else if (score >= 60) return "D";

        else return "F";

    }



    string toString() {

        return "Name: " + name + ", Age: " + to_string(age) + ", Student ID: " + to_string(studentID) + ", Score: " + to_string(score) + ", GPA: " + GPA;

    }

};



int main() {

    Student student("John Doe", 12345);



    student.updateInfo("John Doe", 20, 12345, 85.5);



    student.displayInfo();



    cout << "GPA: " << student.getGPA() << endl;



    cout << student.toString() << endl;



    return 0;

}

