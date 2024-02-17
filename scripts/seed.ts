const { PrismaClient } = require("@prisma/client")


const database = new PrismaClient()

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Technology" },
                { name: "Music" },
                { name: "Photography" },
                { name: "Engineering" },
                { name: "Business" },
                { name: "Film" },
                { name: "Fitness" },


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