import { Review } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

/**
 * @author Thaqi Ul Islam Kafi
 * @description Repository for managing reviews in the database.
 * @generated 2026-03-13
 */

export const ReviewRepository = {

    async findAll() {

        const reviews = await prisma.review.findMany({
            include: {
                property: {
                    select: {
                        title: true,
                    }
                },
                user: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        return reviews;
    },

    async findAllById(id: string) {

        const reviews = await prisma.review.findMany({
            where: { userId: id },
            include: {
                property: {
                    select: {
                        title: true,
                    }
                },
                user: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        return reviews;
    },

    async findById(id: string) {

        const review = await prisma.review.findUnique({
            where: { id },
            include: {
                property: {
                    select: {
                        title: true,
                    }
                },
                user: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        return review;
    },

    async add(data: Review) {
        const review = await prisma.review.create({
            data,
            include: {
                property: {
                    select: {
                        title: true,
                    }
                },
                user: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        return review;
    },

    async update(id: string, data: Partial<Review>) {

        const review = await prisma.review.update({
            where: { id },
            data,
            include: {
                property: {
                    select: {
                        title: true,
                    }
                },
                user: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        return review;
    },

    async delete(id: string) {
        const review = await prisma.review.delete({
            where: { id }
        });
        return review;
    }
};
