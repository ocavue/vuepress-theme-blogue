function isVisiblePost (page) {
    // not posts
    if (["/", "/about.html"].includes(page.path)) {
        return false
    }

    // hidden posts
    for (let part of page.path.split("/")) {
        if (part.startsWith("__")) {
            return false
        }
    }

    return true
}

export { isVisiblePost }