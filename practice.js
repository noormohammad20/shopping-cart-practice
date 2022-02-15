/* ৮. একটা array এর মধ্যে অনেকগুলা ইংরেজি জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম (স্ট্রিং) আছে। জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম না জানলে, গুগলে সার্চ দিয়ে বের করো। তারপর একটা লুপ চালিয়ে দেখো কোন কোন বইয়ের নামের মধ্যে "javascript" আছে। তাহলে সেই বইগুলার নাম আরেকটা array এর মধ্যে রাখবে। আর হ্যাঁ, যখন javascript আছে কিনা চেক করবে তখন খেয়াল করবে বড়হাতের নাকি ছোট হাতের অক্ষর সেটা বাদ দিয়ে চেক করতে। অর্থাৎ কেইস ইনসেন্সিটিভ হবে।  */
const books = ['A Smarter Way to Learn javaScript', 'Eloquent javascript', ' JavaScript & JQuery', ' javascript', 'Learn JavaScript VISUALLY', ' JavaScript: The Definitive Guide', ' Effective JavaScript']

let output = []
for (const book of books) {
    if (book.toLowerCase().includes('javascript')) {
        output.push(book)
    }
}
// console.log(output)

// ৯. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে।

const numbers = [1, 5, 53, 63, 77, 33, 856, 85, 23, 99, 467, 74, 875]

const myNums = numbers.sort(function (a, b) {
    return a - b
})
console.log(myNums)

