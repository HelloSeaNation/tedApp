import Express from "express";
import path from "path";

const app = Express();

const PORT = process.env.PORT || 3000;

app.use(Express.static(path.join(__dirname, 'frontend')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get("/", (req, res) => {
    res.send(path.join(__dirname, 'frontend', 'index.html'));
});

// app.get("/order", (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'order.html'));
// });

// app.get("/cart", (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'cart.html'));
// });

// app.get("/cart/payment", (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'payment.html'));
// });

// app.get("/thankyou", (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'thankyou.html'));
// });
