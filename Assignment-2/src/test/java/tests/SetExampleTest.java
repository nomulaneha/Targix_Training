package tests;

import collections.SetExample;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SetExampleTest {

    @Test
    public void testSetOperations() {
        SetExample example = new SetExample();
        example.addItem("Apple");
        example.addItem("Banana");
        example.addItem("Apple");

        assertEquals(2, example.getItems().size());
        assertTrue(example.searchItem("Apple"));
        assertTrue(example.removeItem("Banana"));
        assertFalse(example.searchItem("Banana"));
    }
}
