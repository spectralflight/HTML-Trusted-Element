// ============================================================================

function assert(condition: bool, message: string) {
    if (!condition) {
        throw (message || "Assertion failed");
    }
}

// ============================================================================

