import React from "react";

export default function ProductDetailNutrition({ nutrition }) {
  return (
    <table className="table table-nutrition">
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Protein</td>
          <td>{nutrition.protein}g</td>
        </tr>
        <tr>
          <td>Carbohydrates</td>
          <td>{nutrition.carbs}g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>{nutrition.fat}g</td>
        </tr>
        <tr>
          <td>Salt</td>
          <td>{nutrition.salt}g</td>
        </tr>
      </tbody>
    </table>
  );
}
