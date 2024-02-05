const { PrismaClient } = require("@prisma/client")


const database = new PrismaClient()

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Computer Science" },
                { name: "Music" },
                { name: "Art" },
                { name: "Photography" },
                { name: "Engineering" },
                { name: "Business" },
                { name: "Film" },
                { name: "Fashion" },

            ]
        })

        console.log("Success")

    } catch (error) {
        console.log("Error sedding the database categories", error)
    } finally {
        await database.$disconnect()
    }
}

main()