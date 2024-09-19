import heapq

def dijkstra(graph, start):
    priority_queue = []
    heapq.heappush(priority_queue, (0, start))

    distances = {vertex: float('inf') for vertex in graph}
    distances[start] = 0

    predecessors = {vertex: None for vertex in graph}

    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)

        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex]:
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                predecessors[neighbor] = current_vertex
                heapq.heappush(priority_queue, (distance, neighbor))

    return distances, predecessors

def reconstruct_path(predecessors, start, end):
    """
    Reconstruct the shortest path from start to end using the predecessors dictionary.
    
    :param predecessors: A dictionary of predecessors for path reconstruction.
    :param start: The starting vertex.
    :param end: The target vertex.
    :return: A list representing the path from start to end.
    """
    path = []
    while end is not None:
        path.append(end)
        end = predecessors[end]
    path.reverse()
    return path if path[0] == start else []

def print_graph(graph):
    """
    Print the graph.
    """
    for vertex, edges in graph.items():
        print(f"{vertex}: {edges}")

def main():
    graph = {}
    while True:
        print("\nMenu:")
        print("1. Add vertex and edges")
        print("2. Print graph")
        print("3. Compute shortest paths")
        print("4. Exit")
        choice = input("Enter your choice: ").strip()

        if choice == '1':
            vertex = input("Enter vertex: ").strip()
            edges = input(f"Enter edges for vertex {vertex} (format: neighbor1,weight1;neighbor2,weight2;...): ").strip()
            edge_list = []
            for edge in edges.split(';'):
                neighbor, weight = edge.split(',')
                edge_list.append((neighbor.strip(), int(weight.strip())))
            graph[vertex] = edge_list

        elif choice == '2':
            print("\nGraph:")
            print_graph(graph)

        elif choice == '3':
            if not graph:
                print("Graph is empty. Please add vertices and edges first.")
                continue

            start_vertex = input("Enter the start vertex: ").strip()
            if start_vertex not in graph:
                print("Start vertex not found in the graph.")
                continue

            distances, predecessors = dijkstra(graph, start_vertex)

            print("\nShortest distances from start vertex:")
            for vertex, distance in distances.items():
                print(f"Distance to {vertex}: {distance}")

            end_vertex = input("Enter the end vertex to find the shortest path to: ").strip()
            if end_vertex not in graph:
                print("End vertex not found in the graph.")
                continue

            path = reconstruct_path(predecessors, start_vertex, end_vertex)
            if path:
                print(f"Shortest path from {start_vertex} to {end_vertex}: {' -> '.join(path)}")
            else:
                print(f"No path from {start_vertex} to {end_vertex}.")

        elif choice == '4':
            print("Exiting...")
            break

        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
