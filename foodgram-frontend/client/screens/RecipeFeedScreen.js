
import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import api from '../api/api';

const RecipeFeedScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchRecipes = async () => {
    try {
      const res = await api.get('/recipes');
      setRecipes(res.data);
    } catch (err) {
      console.error('Error fetching recipes:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchRecipes();
  };

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </ScrollView>
  );
};

export default RecipeFeedScreen;
```
