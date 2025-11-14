package tests;

import collections.MapExample;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MapExampleTest {

    @Test
    public void testMapOperations() {
        MapExample example = new MapExample();
        example.addItem(1, "Apple");
        example.addItem(2, "Banana");

        assertEquals("Apple", example.searchItem(1));
        assertTrue(example.removeItem(1));
        assertNull(example.searchItem(1));
    }
}
