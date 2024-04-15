function findOrder(element, p) {
    if (element <= 0 || element >= p) {
        throw new Error("Element must be within the field range (0 < element < p)");
    }
    let result = 1;
    let power = element;
    while (power !== 1) {
        power = (power * element) % p;
        result++;
        if (result > p - 1) {
            throw new Error("Failed to find the order within expected range");
        }
    }
    return result;
}
