class DisjointSetUnion:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [1] * n

    def find(self, u):
        if self.parent[u] != u:
            self.parent[u] = self.find(self.parent[u])  # Path compression
        return self.parent[u]

    def union(self, u, v):
        root_u = self.find(u)
        root_v = self.find(v)
        if root_u != root_v:
            if self.rank[root_u] > self.rank[root_v]:
                self.parent[root_v] = root_u
            elif self.rank[root_u] < self.rank[root_v]:
                self.parent[root_u] = root_v
            else:
                self.parent[root_v] = root_u
                self.rank[root_u] += 1


def kruskal(n, edges):
    """
    Perform Kruskal's algorithm to find the Minimum Spanning Tree (MST) of a graph.

    :param n: Number of vertices in the graph
    :param edges: List of edges in the graph where each edge is represented as (weight, u, v)
    :return: Total weight of the MST and a list of edges in the MST
    """
    dsu = DisjointSetUnion(n)
    edges.sort(key=lambda x: x[0])

    mst_weight = 0
    mst_edges = []

    for weight, u, v in edges:
        if dsu.find(u) != dsu.find(v):
            dsu.union(u, v)
            mst_edges.append((u, v, weight))
            mst_weight += weight

    return mst_weight, mst_edges


def main():
    while True:
        print("\nMenu:")
        print("1. Enter number of vertices and edges")
        print("2. Calculate MST using Kruskal's Algorithm")
        print("3. Exit")

        choice = input("Enter your choice (1/2/3): ")

        if choice == '1':
            global n, edges
            n = int(input("Enter the number of vertices: "))
            edges = []
            num_edges = int(input("Enter the number of edges: "))
            for _ in range(num_edges):
                weight = int(input("Enter edge weight: "))
                u = int(input("Enter vertex u: "))
                v = int(input("Enter vertex v: "))
                edges.append((weight, u, v))

        elif choice == '2':
            if 'n' in globals() and 'edges' in globals():
                mst_weight, mst_edges = kruskal(n, edges)
                print(f"Total weight of MST: {mst_weight}")
                print("Edges in the MST:")
                for u, v, weight in mst_edges:
                    print(f"({u}, {v}) with weight {weight}")
            else:
                print("Please enter the number of vertices and edges first.")

        elif choice == '3':
            print("Exiting the program.")
            break

        else:
            print("Invalid choice. Please select a valid option.")


if __name__ == "__main__":
    main()

