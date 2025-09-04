import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
import java.util.HashMap;
import java.util.Map;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.TestMethodOrder;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class AppTest {

    @Test
    @Order(1)
    public void createTask() throws InterruptedException {
        Map<String, String> newTask = new HashMap<>();
        newTask.put("title", "First task");
        newTask.put("content", "This is the content of the first task.");

        given()
            .contentType("application/json")
            .body(newTask)
        .when()
            .post("http://localhost:3000/tasks")
        .then()
            .statusCode(201);
    }

    // A test to get a single Task by ID and verify its title
    @Test
    @Order(2)
    public void getSingleTaskTest() throws InterruptedException {
        given()
            .pathParam("id", 1)
        .when()
            .get("http://localhost:3000/tasks/{id}")
        .then()
            .statusCode(200)
            .body("title", equalTo("First task"));
    }

    // A new test for a PUT request to update an existing Task.
    @Test
    @Order(3)
    public void updateExistingTaskTest() throws InterruptedException {
        // Create a Map with the updated data for the Task.
        Map<String, String> updatedData = new HashMap<>();
        updatedData.put("title", "Updated Task Title");
        updatedData.put("content", "This content has been updated via a PUT request.");

        given()
            .contentType("application/json") // Set content type for the request.
            .body(updatedData) // Send the updated data as JSON.
            .pathParam("id", 1) // Specify the ID of the Task to update.
        .when()
            .put("http://localhost:3000/tasks/{id}") // Make the PUT request.
        .then()
            .statusCode(200) // Expect a 200 OK status.
            .body("id", equalTo(1)) // Verify the ID is correct.
            .body("title", equalTo("Updated Task Title")) // Verify the title has been updated.
            .body("content", equalTo("This content has been updated via a PUT request.")); // Verify the content has been updated.
    }

    // A new test for a DELETE request to delete a task.
    @Test
    @Order(4)
    public void deleteTaskTest() throws InterruptedException {
        given()
            .pathParam("id", 1) // Specify the ID of the task to delete.
        .when()
            .delete("http://localhost:3000/tasks/{id}") // Make the DELETE request.
        .then()
            .statusCode(204); // Expect a 204 No Content status for a successful deletion.
    }
}