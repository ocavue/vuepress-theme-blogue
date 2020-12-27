---
title: My First Post
date: 2019-01-01
image: https://ws1.sinaimg.cn/large/006tNbRwgy1fyqfv261rsj31900u0hdu.jpg
tags: ["Tag1"]
---

# H1 header

## H2 header

### H3 header

#### H4 header

##### H5 header

###### H6 header

## Code Syntax Highlighting

```go
package main

import "fmt"

func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}
	c <- sum // send sum to c
}

func main() {
	s := []int{7, 2, 8, -9, 4, 0}

	c := make(chan int)
	go sum(s[:len(s)/2], c)
	go sum(s[len(s)/2:], c)
	x, y := <-c, <-c // receive from c

	fmt.Println(x, y, x+y)
}
```

## Table

| Tables        |      Are      |  Cool |
| :------------ | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Image

![vue.js logo](./vue-logo.png)

