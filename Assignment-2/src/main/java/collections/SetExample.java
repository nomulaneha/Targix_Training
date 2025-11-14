package collections;

import java.util.HashSet;
import java.util.Set;

public class SetExample {
    private Set<String> items = new HashSet<>();

    public void addItem(String item) {
        items.add(item);
    }

    public boolean removeItem(String item) {
        return items.remove(item);
    }

    public boolean searchItem(String item) {
        return items.contains(item);
    }

    public Set<String> getItems() {
        return items;
    }

    public void demo() {
        addItem("Apple");
        addItem("Banana");
        addItem("Apple");  // Duplicate ignored

        System.out.println("Set: " + items);
        System.out.println("Search 'Apple': " + searchItem("Apple"));
        removeItem("Banana");
        System.out.println("After removal: " + items);

        System.out.println("Use Case: No duplicates, fast lookup");
    }
}
