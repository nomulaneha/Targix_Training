package tests;

import collections.ListExample;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ListExampleTest {

    @Test
    public void testListOperations() {
        ListExample example = new ListExample();
        example.addItem("Apple");
        example.addItem("Banana");

        assertTrue(example.searchItem("Apple"));
        assertTrue(example.removeItem("Apple"));
        assertFalse(example.searchItem("Apple"));
    }
}
