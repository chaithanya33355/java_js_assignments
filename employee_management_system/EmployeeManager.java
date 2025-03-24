package assignment;
import java.util.ArrayList;
import java.util.List;
public class EmployeeManager {
    public static void main(String[] args) {
        Employee emp1 = new Employee(101, "chaithanya", 50000);
        Employee emp2 = new Employee(102, "sudharshan", 60000);
        Employee emp3 = new Employee(103, "harsha", 55000);
        List<Employee> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
