package collections;

public class CollectionDemo {
    public static void main(String[] args) {
        ListExample listExample = new ListExample();
        SetExample setExample = new SetExample();
        MapExample mapExample = new MapExample();

        System.out.println("----- List Example -----");
        listExample.demo();

        System.out.println("\n----- Set Example -----");
        setExample.demo();

        System.out.println("\n----- Map Example -----");
        mapExample.demo();
    }
}
