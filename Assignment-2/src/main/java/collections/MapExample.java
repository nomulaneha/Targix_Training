package collections;

import java.util.HashMap;
import java.util.Map;

public class MapExample {
    private Map<Integer, String> items = new HashMap<>();

    public void addItem(int key, String value) {
        items.put(key, value);
    }

    public boolean removeItem(int key) {
        return items.remove(key) != null;
    }

    public String searchItem(int key) {
        return items.get(key);
    }

    public Map<Integer, String> getItems() {
        return items;
    }

    public void demo() {
        addItem(1, "Apple");
        addItem(2, "Banana");
        addItem(3, "Cherry");

        System.out.println("Map: " + items);
        System.out.println("Search key 2: " + searchItem(2));
        removeItem(1);
        System.out.println("After removal: " + items);

        System.out.println("Use Case: Key-value pairs, fast access by key");
    }
}
