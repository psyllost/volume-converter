from __future__ import unicode_literals

from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse

import json

app = Flask(__name__)
api = Api(app)

with open(r"ingredients.json", "r", encoding="utf-8") as read_file:
    ingredients = json.load(read_file)

class Ingredients(Resource):
    def get(self):
        global ingredients
        response = jsonify(ingredients)
        response.headers.add('Access-Control-Allow-Origin', '*')
        # ingredients = [{"id": ingredient["id"], "name": ingredient["name"].encode("utf-8").decode("utf-8")} for ingredient in ingredients]
        return response

class Converter(Resource):
    def get(self, ingredient, input_unit, value, output_unit):
        global ingredients
        to_oz = None
        for ingr in ingredients:
            if int(ingr["id"]) == int(ingredient):
                ratio = int(ingr["value"])
                value = int(value)
                if input_unit == "grams":
                    to_oz = value/ratio
                elif input_unit == "oz":  
                    to_oz = value
                elif input_unit == "tablespoon":
                    to_oz = value/2
                elif input_unit == "cup":
                    to_oz = value*8
                break

        if output_unit == "grams":
            output_value = ratio*to_oz
        elif output_unit == "oz":
            output_value = to_oz
        elif output_unit == "tablespoon":
            output_value = to_oz*2
        elif output_unit == "cup":
            output_value = to_oz/8
        response = jsonify({"ingredient": int(ingredient), "fromValue": value, "fromMU": input_unit, "toMU": output_unit, "result": output_value})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
        

api.add_resource(Ingredients, "/ingredients")
api.add_resource(Converter, "/convert/<string:ingredient>/<string:input_unit>/<string:value>/<string:output_unit>")

app.run(debug=True, host='0.0.0.0')
