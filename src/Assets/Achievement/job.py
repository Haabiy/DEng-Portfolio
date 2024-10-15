from pyspark.sql import SparkSession
import logging

logging.basicConfig(level=logging.INFO)

def main():
    try:
        # Initialize Spark session
        spark = SparkSession.builder.appName("SamplePySparkJob").getOrCreate()

        # S3 input and output paths
        input_path = "s3://azfrd-test/emr/data/test-input/input_data.csv"
        output_path = "s3://azfrd-test/emr/data/test-output/SampleTest.csv"

        # Read input data
        df = spark.read.csv(input_path, header=True, inferSchema=True)

        # Perform a simple transformation (in this case, just selecting a subset of columns)
        transformed_df = df.select("Name", "Age")

        # Write the result back to S3 in Parquet format
        transformed_df.write.mode("overwrite").csv(output_path)

        # Stop the Spark session
        spark.stop()
    except Exception as e:
        logging.error(f"An error occurred: {str(e)}")
        raise

if __name__ == "__main__":
    main()
