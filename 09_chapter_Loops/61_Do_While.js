let retry = 0;
do {
    console.log("Execute a Code!");
    console.log("RETRYing.......", retry);
    retry++;
} while (retry < 3);

/*
Execute a Code!
RETRYing....... 0
Execute a Code!
RETRYing....... 1
Execute a Code!
RETRYing....... 2
*/