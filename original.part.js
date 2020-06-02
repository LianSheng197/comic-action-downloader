DIVIDE_NUM = 4
MULTIPLE = 8
width = t.width
height = t.height
cell_width = Math.floor(width / (DIVIDE_NUM * MULTIPLE)) * MULTIPLE
cell_height = Math.floor(height / (DIVIDE_NUM * MULTIPLE)) * MULTIPLE


class O {
    solve() {
        view.drawImage(0, 0, width, height, 0, 0);
        for (let e = 0; e < DIVIDE_NUM * DIVIDE_NUM; e++) {
            let t = Math.floor(e / DIVIDE_NUM) * cell_height,
                n = e % DIVIDE_NUM * cell_width,
                i = Math.floor(e / DIVIDE_NUM),
                s = e % DIVIDE_NUM * DIVIDE_NUM + i,
                r = s % DIVIDE_NUM * cell_width,
                o = Math.floor(s / DIVIDE_NUM) * cell_height;
            view.drawImage(n, t, cell_width, cell_height, r, o)
        }
        view.replaceImage()
    }
}

class q {
    drawImage(e, t, n, i, s, r) {
        let o = solvedImage.getContext("2d");
        o.imageSmoothingEnabled = !1,
            o.drawImage(puzzledImage, e, t, n, i, s, r, n, i)
    }
}