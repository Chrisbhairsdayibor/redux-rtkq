import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `recipes`,
    }),

    getRecipesByID: builder.query({
      query: (id) => `recipes/${id}`,
    }),

    createRecipes: builder.mutation({
      query: (recipes) => ({
        url: 'recipes',
        method: 'POST',
        body: recipes,
      }),
    }),

    updateRecipes: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `recipes/${id}`,
        method: 'PUT',
        body: updates,
      }),
    }),

    deleteRecipes: builder.mutation({
      query: (id) => ({
        url: `recipes/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetRecipesQuery,
  useGetRecipesByIDQuery,
  useCreateRecipesMutation,
  useUpdateRecipesMutation,
  useDeleteRecipesMutation,
} = recipesApi
