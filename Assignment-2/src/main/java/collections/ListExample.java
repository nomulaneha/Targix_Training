package collections;

import java.util.ArrayList;
import java.util.List;

public class ListExample {
    private List<String> items = new ArrayList<>();

    public void addItem(String item) {
        items.add(item);
    }

    public boolean removeItem(String item) {
        return items.remove(item);
    }

    public boolean searchItem(String item) {
        return items.contains(item);
    }

    public List<String> getItems() {
        return items;
    }

    public void demo() {
        addItem("Apple");
        addItem("Banana");
        addItem("Cherry");

        System.out.println("List: " + items);
        System.out.println("Search 'Banana': " + searchItem("Banana"));
        removeItem("Apple");
        System.out.println("After removal: " + items);

        System.out.println("Use Case: Ordered, allows duplicates, index-based access");
    }
}
